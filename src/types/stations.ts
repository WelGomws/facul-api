import QueryString from "qs";

export type bodyRequest = {
  name: string;
  lineReference: string;
  accessibilityItems: string[];
};

export type Filter = {
  name?: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[];
  lineId?: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[];
};
