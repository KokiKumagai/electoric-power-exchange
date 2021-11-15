import * as $protobuf from "protobufjs";
/** Namespace main. */
export namespace main {

    /** AccountType enum. */
    enum AccountType {
        UNKNOWN = 0,
        ADMIN = 1,
        STUDENT = 2,
        ACCOUNTANT = 3
    }

    /** Properties of an Account. */
    interface IAccount {

        /** Account id */
        id?: (string|null);

        /** Account user_ids */
        user_ids?: (string[]|null);

        /** Account admin_user_ids */
        admin_user_ids?: (string[]|null);

        /** Account name */
        name?: (string|null);

        /** Account image_url */
        image_url?: (string|null);

        /** Account type */
        type?: (main.AccountType|null);
    }

    /** Represents an Account. */
    class Account implements IAccount {

        /**
         * Constructs a new Account.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IAccount);

        /** Account id. */
        public id: string;

        /** Account user_ids. */
        public user_ids: string[];

        /** Account admin_user_ids. */
        public admin_user_ids: string[];

        /** Account name. */
        public name: string;

        /** Account image_url. */
        public image_url: string;

        /** Account type. */
        public type: main.AccountType;

        /**
         * Encodes the specified Account message. Does not implicitly {@link main.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link main.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.Account;

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.Account;

        /**
         * Verifies an Account message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Account
         */
        public static fromObject(object: { [k: string]: any }): main.Account;

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @param message Account
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Account to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountantAccount. */
    interface IAccountantAccount {

        /** AccountantAccount id */
        id?: (string|null);

        /** AccountantAccount name */
        name?: (string|null);

        /** AccountantAccount xrp_address */
        xrp_address?: (string|null);
    }

    /** Represents an AccountantAccount. */
    class AccountantAccount implements IAccountantAccount {

        /**
         * Constructs a new AccountantAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IAccountantAccount);

        /** AccountantAccount id. */
        public id: string;

        /** AccountantAccount name. */
        public name: string;

        /** AccountantAccount xrp_address. */
        public xrp_address: string;

        /**
         * Encodes the specified AccountantAccount message. Does not implicitly {@link main.AccountantAccount.verify|verify} messages.
         * @param message AccountantAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IAccountantAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountantAccount message, length delimited. Does not implicitly {@link main.AccountantAccount.verify|verify} messages.
         * @param message AccountantAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IAccountantAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountantAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountantAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.AccountantAccount;

        /**
         * Decodes an AccountantAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountantAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.AccountantAccount;

        /**
         * Verifies an AccountantAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountantAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountantAccount
         */
        public static fromObject(object: { [k: string]: any }): main.AccountantAccount;

        /**
         * Creates a plain object from an AccountantAccount message. Also converts values to other types if specified.
         * @param message AccountantAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.AccountantAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountantAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminAccount. */
    interface IAdminAccount {

        /** AdminAccount id */
        id?: (string|null);

        /** AdminAccount name */
        name?: (string|null);

        /** AdminAccount xrp_address */
        xrp_address?: (string|null);
    }

    /** Represents an AdminAccount. */
    class AdminAccount implements IAdminAccount {

        /**
         * Constructs a new AdminAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IAdminAccount);

        /** AdminAccount id. */
        public id: string;

        /** AdminAccount name. */
        public name: string;

        /** AdminAccount xrp_address. */
        public xrp_address: string;

        /**
         * Encodes the specified AdminAccount message. Does not implicitly {@link main.AdminAccount.verify|verify} messages.
         * @param message AdminAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IAdminAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdminAccount message, length delimited. Does not implicitly {@link main.AdminAccount.verify|verify} messages.
         * @param message AdminAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IAdminAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdminAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.AdminAccount;

        /**
         * Decodes an AdminAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdminAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.AdminAccount;

        /**
         * Verifies an AdminAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdminAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminAccount
         */
        public static fromObject(object: { [k: string]: any }): main.AdminAccount;

        /**
         * Creates a plain object from an AdminAccount message. Also converts values to other types if specified.
         * @param message AdminAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.AdminAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AskRequest. */
    interface IAskRequest {

        /** AskRequest id */
        id?: (string|null);

        /** AskRequest account_id */
        account_id?: (string|null);

        /** AskRequest price */
        price?: (number|null);

        /** AskRequest amount */
        amount?: (number|null);

        /** AskRequest denom */
        denom?: (string|null);
    }

    /** Represents an AskRequest. */
    class AskRequest implements IAskRequest {

        /**
         * Constructs a new AskRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IAskRequest);

        /** AskRequest id. */
        public id: string;

        /** AskRequest account_id. */
        public account_id: string;

        /** AskRequest price. */
        public price: number;

        /** AskRequest amount. */
        public amount: number;

        /** AskRequest denom. */
        public denom: string;

        /**
         * Encodes the specified AskRequest message. Does not implicitly {@link main.AskRequest.verify|verify} messages.
         * @param message AskRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IAskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AskRequest message, length delimited. Does not implicitly {@link main.AskRequest.verify|verify} messages.
         * @param message AskRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IAskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AskRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AskRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.AskRequest;

        /**
         * Decodes an AskRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AskRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.AskRequest;

        /**
         * Verifies an AskRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AskRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AskRequest
         */
        public static fromObject(object: { [k: string]: any }): main.AskRequest;

        /**
         * Creates a plain object from an AskRequest message. Also converts values to other types if specified.
         * @param message AskRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.AskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AskRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Balance. */
    interface IBalance {

        /** Balance id */
        id?: (string|null);

        /** Balance account_id */
        account_id?: (string|null);

        /** Balance amount_jpy */
        amount_jpy?: (Long|null);

        /** Balance amount_xrp */
        amount_xrp?: (Long|null);
    }

    /** Represents a Balance. */
    class Balance implements IBalance {

        /**
         * Constructs a new Balance.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IBalance);

        /** Balance id. */
        public id: string;

        /** Balance account_id. */
        public account_id: string;

        /** Balance amount_jpy. */
        public amount_jpy: Long;

        /** Balance amount_xrp. */
        public amount_xrp: Long;

        /**
         * Encodes the specified Balance message. Does not implicitly {@link main.Balance.verify|verify} messages.
         * @param message Balance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IBalance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Balance message, length delimited. Does not implicitly {@link main.Balance.verify|verify} messages.
         * @param message Balance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IBalance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Balance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Balance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.Balance;

        /**
         * Decodes a Balance message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Balance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.Balance;

        /**
         * Verifies a Balance message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Balance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Balance
         */
        public static fromObject(object: { [k: string]: any }): main.Balance;

        /**
         * Creates a plain object from a Balance message. Also converts values to other types if specified.
         * @param message Balance
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.Balance, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Balance to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BidRequest. */
    interface IBidRequest {

        /** BidRequest id */
        id?: (string|null);

        /** BidRequest account_id */
        account_id?: (string|null);

        /** BidRequest price */
        price?: (number|null);

        /** BidRequest amount */
        amount?: (number|null);

        /** BidRequest denom */
        denom?: (string|null);
    }

    /** Represents a BidRequest. */
    class BidRequest implements IBidRequest {

        /**
         * Constructs a new BidRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IBidRequest);

        /** BidRequest id. */
        public id: string;

        /** BidRequest account_id. */
        public account_id: string;

        /** BidRequest price. */
        public price: number;

        /** BidRequest amount. */
        public amount: number;

        /** BidRequest denom. */
        public denom: string;

        /**
         * Encodes the specified BidRequest message. Does not implicitly {@link main.BidRequest.verify|verify} messages.
         * @param message BidRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IBidRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BidRequest message, length delimited. Does not implicitly {@link main.BidRequest.verify|verify} messages.
         * @param message BidRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IBidRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BidRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BidRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.BidRequest;

        /**
         * Decodes a BidRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BidRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.BidRequest;

        /**
         * Verifies a BidRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BidRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BidRequest
         */
        public static fromObject(object: { [k: string]: any }): main.BidRequest;

        /**
         * Creates a plain object from a BidRequest message. Also converts values to other types if specified.
         * @param message BidRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.BidRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BidRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Chat. */
    interface IChat {

        /** Chat id */
        id?: (string|null);

        /** Chat name */
        name?: (string|null);

        /** Chat user1 */
        user1?: (string|null);

        /** Chat user2 */
        user2?: (string|null);
    }

    /** Represents a Chat. */
    class Chat implements IChat {

        /**
         * Constructs a new Chat.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IChat);

        /** Chat id. */
        public id: string;

        /** Chat name. */
        public name: string;

        /** Chat user1. */
        public user1: string;

        /** Chat user2. */
        public user2: string;

        /**
         * Encodes the specified Chat message. Does not implicitly {@link main.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link main.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.Chat;

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.Chat;

        /**
         * Verifies a Chat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chat
         */
        public static fromObject(object: { [k: string]: any }): main.Chat;

        /**
         * Creates a plain object from a Chat message. Also converts values to other types if specified.
         * @param message Chat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.Chat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message status */
        status?: (boolean|null);

        /** Message type */
        type?: (string|null);

        /** Message id */
        id?: (string|null);

        /** Message chat_id */
        chat_id?: (string|null);

        /** Message sender_account_id */
        sender_account_id?: (string|null);

        /** Message recipient_account_id */
        recipient_account_id?: (string|null);

        /** Message text */
        text?: (string|null);

        /** Message date */
        date?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IMessage);

        /** Message status. */
        public status: boolean;

        /** Message type. */
        public type: string;

        /** Message id. */
        public id: string;

        /** Message chat_id. */
        public chat_id: string;

        /** Message sender_account_id. */
        public sender_account_id: string;

        /** Message recipient_account_id. */
        public recipient_account_id: string;

        /** Message text. */
        public text: string;

        /** Message date. */
        public date?: (google.protobuf.ITimestamp|null);

        /**
         * Encodes the specified Message message. Does not implicitly {@link main.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link main.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): main.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MonthlyUsage. */
    interface IMonthlyUsage {

        /** MonthlyUsage id */
        id?: (string|null);

        /** MonthlyUsage student_account_id */
        student_account_id?: (string|null);

        /** MonthlyUsage amount_kwh */
        amount_kwh?: (Long|null);
    }

    /** Represents a MonthlyUsage. */
    class MonthlyUsage implements IMonthlyUsage {

        /**
         * Constructs a new MonthlyUsage.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IMonthlyUsage);

        /** MonthlyUsage id. */
        public id: string;

        /** MonthlyUsage student_account_id. */
        public student_account_id: string;

        /** MonthlyUsage amount_kwh. */
        public amount_kwh: Long;

        /**
         * Encodes the specified MonthlyUsage message. Does not implicitly {@link main.MonthlyUsage.verify|verify} messages.
         * @param message MonthlyUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IMonthlyUsage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MonthlyUsage message, length delimited. Does not implicitly {@link main.MonthlyUsage.verify|verify} messages.
         * @param message MonthlyUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IMonthlyUsage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MonthlyUsage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MonthlyUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.MonthlyUsage;

        /**
         * Decodes a MonthlyUsage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MonthlyUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.MonthlyUsage;

        /**
         * Verifies a MonthlyUsage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MonthlyUsage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MonthlyUsage
         */
        public static fromObject(object: { [k: string]: any }): main.MonthlyUsage;

        /**
         * Creates a plain object from a MonthlyUsage message. Also converts values to other types if specified.
         * @param message MonthlyUsage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.MonthlyUsage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MonthlyUsage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SolarPower. */
    interface ISolarPower {

        /** SolarPower id */
        id?: (string|null);

        /** SolarPower student_account_id */
        student_account_id?: (string|null);

        /** SolarPower amount_kwh */
        amount_kwh?: (Long|null);

        /** SolarPower price */
        price?: (Long|null);

        /** SolarPower denom */
        denom?: (string|null);
    }

    /** Represents a SolarPower. */
    class SolarPower implements ISolarPower {

        /**
         * Constructs a new SolarPower.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.ISolarPower);

        /** SolarPower id. */
        public id: string;

        /** SolarPower student_account_id. */
        public student_account_id: string;

        /** SolarPower amount_kwh. */
        public amount_kwh: Long;

        /** SolarPower price. */
        public price: Long;

        /** SolarPower denom. */
        public denom: string;

        /**
         * Encodes the specified SolarPower message. Does not implicitly {@link main.SolarPower.verify|verify} messages.
         * @param message SolarPower message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.ISolarPower, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SolarPower message, length delimited. Does not implicitly {@link main.SolarPower.verify|verify} messages.
         * @param message SolarPower message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.ISolarPower, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SolarPower message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SolarPower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.SolarPower;

        /**
         * Decodes a SolarPower message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SolarPower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.SolarPower;

        /**
         * Verifies a SolarPower message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SolarPower message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SolarPower
         */
        public static fromObject(object: { [k: string]: any }): main.SolarPower;

        /**
         * Creates a plain object from a SolarPower message. Also converts values to other types if specified.
         * @param message SolarPower
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.SolarPower, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SolarPower to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StudentAccount. */
    interface IStudentAccount {

        /** StudentAccount id */
        id?: (string|null);

        /** StudentAccount name */
        name?: (string|null);

        /** StudentAccount payment_method */
        payment_method?: (string|null);

        /** StudentAccount xrp_address */
        xrp_address?: (string|null);
    }

    /** Represents a StudentAccount. */
    class StudentAccount implements IStudentAccount {

        /**
         * Constructs a new StudentAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IStudentAccount);

        /** StudentAccount id. */
        public id: string;

        /** StudentAccount name. */
        public name: string;

        /** StudentAccount payment_method. */
        public payment_method: string;

        /** StudentAccount xrp_address. */
        public xrp_address: string;

        /**
         * Encodes the specified StudentAccount message. Does not implicitly {@link main.StudentAccount.verify|verify} messages.
         * @param message StudentAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IStudentAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StudentAccount message, length delimited. Does not implicitly {@link main.StudentAccount.verify|verify} messages.
         * @param message StudentAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IStudentAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StudentAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StudentAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.StudentAccount;

        /**
         * Decodes a StudentAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StudentAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.StudentAccount;

        /**
         * Verifies a StudentAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StudentAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StudentAccount
         */
        public static fromObject(object: { [k: string]: any }): main.StudentAccount;

        /**
         * Creates a plain object from a StudentAccount message. Also converts values to other types if specified.
         * @param message StudentAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.StudentAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StudentAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Transaction. */
    interface ITransaction {

        /** Transaction status */
        status?: (boolean|null);

        /** Transaction id */
        id?: (string|null);

        /** Transaction sender_account_id */
        sender_account_id?: (string|null);

        /** Transaction sender_xrp_address */
        sender_xrp_address?: (string|null);

        /** Transaction recipient_account_id */
        recipient_account_id?: (string|null);

        /** Transaction recipient_xrp_address */
        recipient_xrp_address?: (string|null);

        /** Transaction amount */
        amount?: (Long|null);

        /** Transaction denom */
        denom?: (string|null);
    }

    /** Represents a Transaction. */
    class Transaction implements ITransaction {

        /**
         * Constructs a new Transaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.ITransaction);

        /** Transaction status. */
        public status: boolean;

        /** Transaction id. */
        public id: string;

        /** Transaction sender_account_id. */
        public sender_account_id: string;

        /** Transaction sender_xrp_address. */
        public sender_xrp_address: string;

        /** Transaction recipient_account_id. */
        public recipient_account_id: string;

        /** Transaction recipient_xrp_address. */
        public recipient_xrp_address: string;

        /** Transaction amount. */
        public amount: Long;

        /** Transaction denom. */
        public denom: string;

        /**
         * Encodes the specified Transaction message. Does not implicitly {@link main.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transaction message, length delimited. Does not implicitly {@link main.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transaction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.Transaction;

        /**
         * Decodes a Transaction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.Transaction;

        /**
         * Verifies a Transaction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transaction
         */
        public static fromObject(object: { [k: string]: any }): main.Transaction;

        /**
         * Creates a plain object from a Transaction message. Also converts values to other types if specified.
         * @param message Transaction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transaction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (string|null);

        /** User current_account_id */
        current_account_id?: (string|null);

        /** User account_ids_order */
        account_ids_order?: (string[]|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IUser);

        /** User id. */
        public id: string;

        /** User current_account_id. */
        public current_account_id: string;

        /** User account_ids_order. */
        public account_ids_order: string[];

        /**
         * Encodes the specified User message. Does not implicitly {@link main.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link main.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): main.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UtilityPower. */
    interface IUtilityPower {

        /** UtilityPower id */
        id?: (string|null);

        /** UtilityPower student_account_id */
        student_account_id?: (string|null);

        /** UtilityPower amount_kwh */
        amount_kwh?: (Long|null);

        /** UtilityPower price */
        price?: (Long|null);

        /** UtilityPower denom */
        denom?: (string|null);
    }

    /** Represents an UtilityPower. */
    class UtilityPower implements IUtilityPower {

        /**
         * Constructs a new UtilityPower.
         * @param [properties] Properties to set
         */
        constructor(properties?: main.IUtilityPower);

        /** UtilityPower id. */
        public id: string;

        /** UtilityPower student_account_id. */
        public student_account_id: string;

        /** UtilityPower amount_kwh. */
        public amount_kwh: Long;

        /** UtilityPower price. */
        public price: Long;

        /** UtilityPower denom. */
        public denom: string;

        /**
         * Encodes the specified UtilityPower message. Does not implicitly {@link main.UtilityPower.verify|verify} messages.
         * @param message UtilityPower message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: main.IUtilityPower, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UtilityPower message, length delimited. Does not implicitly {@link main.UtilityPower.verify|verify} messages.
         * @param message UtilityPower message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: main.IUtilityPower, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UtilityPower message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UtilityPower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): main.UtilityPower;

        /**
         * Decodes an UtilityPower message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UtilityPower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): main.UtilityPower;

        /**
         * Verifies an UtilityPower message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UtilityPower message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UtilityPower
         */
        public static fromObject(object: { [k: string]: any }): main.UtilityPower;

        /**
         * Creates a plain object from an UtilityPower message. Also converts values to other types if specified.
         * @param message UtilityPower
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: main.UtilityPower, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UtilityPower to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: Long;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
