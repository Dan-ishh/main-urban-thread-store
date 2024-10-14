"use client";

import { WixClientContext } from "@/context/wixContext";
import { useContext, useEffect, useState } from "react";

export const useWixClient = () => {
  return useContext(WixClientContext);
};
