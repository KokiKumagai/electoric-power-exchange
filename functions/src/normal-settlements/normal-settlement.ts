/* eslint-disable camelcase */
import { normal_settlement } from '.';
import { normal_ask_history } from '../normal-ask-histories';
import { normal_ask } from '../normal-asks';
import { normal_bid_history } from '../normal-bid-histories';
import { normal_bid } from '../normal-bids';
import { single_price_normal_settlement } from '../single-price-normal-settlements';
import { NormalAskHistory, NormalBidHistory, NormalSettlement } from '@local/common';

single_price_normal_settlement.onCreateHandler.push(async (snapshot, context) => {
  const data = snapshot.data()!;

  const normalBids = await normal_bid.list();
  const sortNormalBids = normalBids.sort((first, second) => second.price - first.price);

  const normalAsks = await normal_ask.list();
  const sortNormalAsks = normalAsks.sort((first, second) => first.price - second.price);

  let i = 0;
  let j = 0;
  const condition = true;
  while (condition) {
    if (sortNormalBids[i] < data.price || sortNormalAsks[j] > data.price) {
      for (; i < sortNormalBids.length; i++) {
        await normal_bid_history.create(
          new NormalBidHistory({
            account_id: sortNormalBids[i].account_id,
            price: sortNormalBids[i].price,
            amount: sortNormalBids[i].amount,
            is_accepted: false,
            contract_price: data.price,
          }),
        );
        await normal_bid.delete_(sortNormalBids[i].id);
      }

      for (; j < sortNormalAsks.length; j++) {
        await normal_ask_history.create(
          new NormalAskHistory({
            account_id: sortNormalAsks[j].account_id,
            price: sortNormalAsks[j].price,
            amount: sortNormalAsks[j].amount,
            is_accepted: false,
            contract_price: data.price,
          }),
        );
        await normal_ask.delete_(sortNormalAsks[j].id);
      }
      break;
    }
    if (sortNormalBids[i].amount < sortNormalAsks[j].amount) {
      await normal_settlement.create(
        new NormalSettlement({
          bid_id: sortNormalBids[i].account_id,
          ask_id: sortNormalAsks[j].account_id,
          price: data.price,
          amount: sortNormalBids[i].amount,
        }),
      );

      await normal_bid_history.create(
        new NormalBidHistory({
          account_id: sortNormalBids[i].account_id,
          price: sortNormalBids[i].price,
          amount: sortNormalBids[i].amount,
          is_accepted: true,
          contract_price: data.price,
        }),
      );
      await normal_bid.delete_(sortNormalBids[i].id);

      await normal_ask_history.create(
        new NormalAskHistory({
          account_id: sortNormalAsks[j].account_id,
          price: sortNormalAsks[j].price,
          amount: sortNormalBids[i].amount,
          is_accepted: true,
          contract_price: data.price,
        }),
      );
      await normal_ask.delete_(sortNormalAsks[j].id);

      sortNormalAsks[j].amount -= sortNormalBids[i].amount;
      i++;
    } else if (sortNormalBids[i].amount > sortNormalAsks[j].amount) {
      await normal_settlement.create(
        new NormalSettlement({
          bid_id: sortNormalBids[i].account_id,
          ask_id: sortNormalAsks[j].account_id,
          price: data.price,
          amount: sortNormalAsks[j].amount,
        }),
      );

      await normal_bid_history.create(
        new NormalBidHistory({
          account_id: sortNormalBids[i].account_id,
          price: sortNormalBids[i].price,
          amount: sortNormalAsks[j].amount,
          is_accepted: true,
          contract_price: data.price,
        }),
      );
      await normal_bid.delete_(sortNormalBids[i].id);

      await normal_ask_history.create(
        new NormalAskHistory({
          account_id: sortNormalAsks[j].account_id,
          price: sortNormalAsks[j].price,
          amount: sortNormalAsks[j].amount,
          is_accepted: true,
          contract_price: data.price,
        }),
      );
      await normal_ask.delete_(sortNormalAsks[j].id);

      sortNormalBids[i].amount -= sortNormalAsks[j].amount;
      j++;
    } else {
      await normal_settlement.create(
        new NormalSettlement({
          bid_id: sortNormalBids[i].account_id,
          ask_id: sortNormalAsks[j].account_id,
          price: data.price,
          amount: sortNormalBids[i].amount,
        }),
      );

      await normal_bid_history.create(
        new NormalBidHistory({
          account_id: sortNormalBids[i].account_id,
          price: sortNormalBids[i].price,
          amount: sortNormalBids[i].amount,
          is_accepted: true,
          contract_price: data.price,
        }),
      );

      await normal_bid.delete_(sortNormalBids[i].id);

      await normal_ask_history.create(
        new NormalAskHistory({
          account_id: sortNormalAsks[j].account_id,
          price: sortNormalAsks[j].price,
          amount: sortNormalBids[i].amount,
          is_accepted: true,
          contract_price: data.price,
        }),
      );
      await normal_ask.delete_(sortNormalAsks[j].id);

      i++;
      j++;
    }
  }
});
