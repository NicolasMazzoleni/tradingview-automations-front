<template>
  <q-page>
    <q-table
      class="my-sticky-header-table"
      flat
      bordered
      title="Swing"
      :rows="rows"
      :columns="columns"
      row-key="name"
  /></q-page>
</template>

<script setup>
import { api } from "boot/axios";

defineOptions({
  name: "SwingPage",
  async preFetch() {
    api
      .post("/swing")
      .then((response) => {
        data.value = response.data;
      })
      .catch((e) => {
        console.log("error ", e);
      });
  },
});

const columns = [
  {
    name: "id",
    required: true,
    label: "ID",
    field: "id",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "token_name",
    align: "center",
    label: "Nom",
    field: "token_name",
    sortable: true,
  },
  {
    name: "token_category",
    label: "Category",
    field: "token_category",
    sortable: true,
  },
  { name: "trade_running", label: "Trade running", field: "trade_running" },
  { name: "buy_robo", label: "BUY - Robo strategy", field: "buy_robo" },
  {
    name: "buy_robo_date",
    label: "BUY - Robo strategy (date)",
    field: "buy_robo_date",
  },
  {
    name: "buy_breakout",
    label: "BUY - Breakout strategy",
    field: "buy_breakout",
  },
  {
    name: "buy_breakout_date",
    label: "BUY - Breakout strategy (date)",
    field: "buy_breakout_date",
  },
  {
    name: "buy_support",
    label: "BUY - Support strategy",
    field: "buy_support",
  },
  {
    name: "buy_support_date",
    label: "BUY - Support strategy (date)",
    field: "buy_support_date",
  },
  {
    name: "sell_robo",
    label: "SELL - Robo strategy",
    field: "sell_robo",
  },
  {
    name: "sell_robo_date",
    label: "SELL - Robo strategy (date)",
    field: "sell_robo_date",
  },
  {
    name: "sell_breakout",
    label: "SELL - Breakout strategy",
    field: "sell_breakout",
  },
  {
    name: "sell_breakout_date",
    label: "SELL - Breakout strategy (date)",
    field: "sell_breakout_date",
  },
  {
    name: "sell_support",
    label: "SELL - Support strategy",
    field: "sell_support",
  },
  {
    name: "sell_support_date",
    label: "SELL - Support strategy (date)",
    field: "sell_support_date",
  },
  {
    name: "take_profit_resistance",
    label: "TAKE PROFIT - Resistance",
    field: "take_profit_resistance",
  },
  {
    name: "take_profit_resistance_date",
    label: "TAKE PROFIT - Resistance (date)",
    field: "take_profit_resistance_date",
  },
];

const rows = [
  {
    name: "1",
    token_name: "BTC",
    token_category: "Hello",
    trade_running: 1,
    buy_robo: 0,
    buy_robo_date: "",
  },
];
</script>
