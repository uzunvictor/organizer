<template>
  <div>
    <div class="blur-background"></div>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
          </tr>
        </thead>
        <tbody class="body"></tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MvcTable",

  mounted() {
    this.createTable();
    // console.log("daysArray", this.daysArray);
    // console.log("normalizeDaysArray: ", this.normalizeDaysArray);
    // console.log("chunkNormalizedArray: ", this.chunkNormalizedArray);
    // console.log("getLastWeekDay: ", this.getLastWeekDay);
  },

  computed: {
    today() {
      return new Date();
    },
    year() {
      return this.today.getFullYear();
    },
    month() {
      return this.today.getMonth();
    },
    daysInMonth() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },
    getFirstWeekDay() {
      return new Date(this.year + "-" + (this.month + 1) + "-01").getDay() - 1;
    },
    getLastWeekDay() {
      return new Date(
        this.year + "-" + (this.month + 1) + "-" + this.daysInMonth
      ).getDay();
    },
    daysArray() {
      return [...Array(this.daysInMonth).keys()].map((elem) => elem + 1);
    },
    normalizedArray() {
      return [
        ...new Array(this.getFirstWeekDay).join(" ").split(" "),
        ...this.daysArray,
        ...new Array(7 - this.getLastWeekDay).join(" ").split(" "),
      ];
    },
    chunkNormalizedArray() {
      let chunkedArray = [];
      let subArray = [];
      for (let element of this.normalizedArray) {
        if (subArray.length === 7) {
          chunkedArray.push(subArray);
          subArray = [];
          subArray.push(element);
        } else {
          subArray.push(element);
          if (chunkedArray.length === 5) chunkedArray.push(subArray);
        }
      }
      return chunkedArray;
    },
  },

  methods: {
    createTable() {
      let table = document.querySelector(".body");
      table.innerHTML = "";

      for (let subArr of this.chunkNormalizedArray) {
        let tr = document.createElement("tr");

        for (let element of subArr) {
          let td = document.createElement("td");
          td.innerHTML = element;
          tr.appendChild(td);
        }

        table.appendChild(tr);
      }
    },
  },
};
</script>
