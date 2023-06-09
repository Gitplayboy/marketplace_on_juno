import { TokenType } from "../../types/tokens";

export enum SwapAmountType {
	ORIGIN,
	TARGET,
}

export type AvailableTokenType =
	| TokenType.JUNO
	| TokenType.ATOM
	| TokenType.USDC
	| TokenType.HUAHUA;

export const AvailableTokens: {
	[key in AvailableTokenType]: {
		fieldKey: string;
		symbol: string;
	};
} = {
	[TokenType.JUNO]: {
		fieldKey: "token_cost_juno",
		symbol: "JUNO",
	},
	[TokenType.ATOM]: {
		fieldKey: "token_cost_atom",
		symbol: "ATOM",
	},
	[TokenType.USDC]: {
		fieldKey: "token_cost_usdc",
		symbol: "USDC",
	},
	[TokenType.HUAHUA]: {
		fieldKey: "token_cost_huhua",
		symbol: "HUAHUA",
	},
};

export enum PresaleState {
	BEFORE,
	PRESALE,
	ENDED,
}

export const FilterButtonOptions: {
	[key in PresaleState]: {
		title: string;
		backgroundColor: string;
		color?: string;
	};
} = {
	[PresaleState.PRESALE]: {
		title: "Live",
		backgroundColor: "#02E296",
	},
	[PresaleState.BEFORE]: {
		title: "Scheduled",
		backgroundColor: "#F7ED51",
	},
	[PresaleState.ENDED]: {
		title: "Finished",
		backgroundColor: "#FF0000",
		color: "white",
	},
};
