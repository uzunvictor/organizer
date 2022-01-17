<template>
  <div>
    <div class="table-container">
      <div class="info">{{ monthsData[month] }} {{ year }}</div>
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
      <div class="nav">
        <a class="prev" @click="prev">nazad</a>
        <a class="next" @click="next">vpered</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MvcTable",

  data() {
    return {
      daysData: [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ],
      monthsData: [
        "январь",
        "февраль",
        "март",
        "апрель",
        "май",
        "июнь",
        "июль",
        "август",
        "сентябрь",
        "октябрь",
        "ноябрь",
        "декабрь",
      ],
      today: new Date(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    };
  },

  mounted() {
    //this.$store.dispatch("start");
    this.createTable();
    console.log("year", this.year);
  },

  computed: {
<<<<<<< HEAD
=======
    // },
>>>>>>> 6cf414f980f8256f2b9f9348982884c1ee7492c2
    daysInMonth() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },
    getFirstWeekDay() {
      return new Date(this.year + "-" + (this.month + 1) + "-01").getDay();
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
        ...new Array(this.getFirstWeekDay === 0 ? 7 : this.getFirstWeekDay)
          .join("0")
          .split(""),
        ...this.daysArray,
        ...new Array(9 - this.getLastWeekDay).join("0").split(""),
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
        }
      }
      if (chunkedArray.length === 5) {
        chunkedArray.push(Array(8).join("0").split(""));
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
          if (element === "0") {
            td.innerHTML = " ";
            td.style.background = "rgba(255, 255, 255, 0.05)";
          } else {
            td.innerHTML = element;
            td.dataset.id = `${this.year}-${this.month}-${element}`;
            let self = this;
            td.addEventListener("click", function () {
              self.pushToDayPage(this.dataset.id);
            });
          }
          tr.appendChild(td);
        }

        table.appendChild(tr);
      }
      console.log("table");
    },

    pushToDayPage(dataset) {
      const newDataset = dataset.split("-").map((item) => +item);
      const dayIndex = new Date(...newDataset).getDay();
      const monthIndex = new Date(...newDataset).getMonth();
      const month = this.monthsData[monthIndex];
      const year = newDataset[0];

      const date = {
        weekDay: this.daysData[dayIndex],
        day: newDataset[2],
        month:
          month[month.length - 1] === "т"
            ? month + "а"
            : month.slice(0, -1) + "я",
        year,
      };
      this.$store.commit("updateChosenDate", date);
      this.$router.push({ name: "day-route", params: { slug: dataset } });
    },

    prev() {
      if (this.month === 0) {
        this.month = 11;
        this.year--;
      } else {
        this.month--;
      }
      this.createTable();
    },

    next() {
      if (this.month === 11) {
        this.month = 0;
        this.year++;
      } else {
        this.month++;
      }
      this.createTable();
    },
  },
};
</script>
