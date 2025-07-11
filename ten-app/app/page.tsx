import type { Metadata } from "next";
import { Ten } from "./components/Ten";
import { useReducer,
         useId, useState, useCallback, useContext, useMemo, createContext } from 'react';

const IndexPage = () => <Ten />;

export default IndexPage;

export const metadata: Metadata = {
  title: "TenApp",
};
