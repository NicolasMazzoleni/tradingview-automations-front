<template>
  <q-page>
    <q-table
      class="my-sticky-header-table"
      flat
      bordered
      title="Scalping"
      :rows="rows"
      :columns="columns"
      row-key="name"
  /></q-page>
</template>

<script setup>
defineOptions({
  name: "ScalpingPage",
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
  { name: "trade_running", label: "Trade running", field: "trade_running" },
  { name: "trade_type", label: "Trade type", field: "trade_type" },
  {
    name: "trendline_type",
    label: "Tradeline configration",
    field: "trendline_type",
  },
  {
    name: "trendline_coin_position",
    label: "Tradeline coin position",
    field: "trendline_coin_position",
  },
];

const rows = [
  {
    name: "1",
    token_name: "BTC",
    token_category: "Hello",
    trade_running: 1,
    trade_type: "Sell",
    trendline_type: "DOWNTREND",
    trendline_coin_position: "BELOW",
  },
];
</script>
