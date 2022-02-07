// ======== START SIDEBAR OPERATIONS ========

const bhContent = document.querySelector(".bh__content");
const hamburgBtn = document.querySelector(".bh__header-hamburg__btn");

hamburgBtn.addEventListener("click", () => {
  bhContent.classList.toggle("sidebar__close");
});

const sidebarLink = document.querySelectorAll(
  ".bh_sidebar-links-list .sidebar__link"
);

sidebarLink.forEach((link) => {
  if (link.classList.contains("has__sub-list")) {
    link.innerHTML += '<i class="fas fa-chevron-left"></i>';

    link.addEventListener("click", (e) => {
      e.preventDefault();

      const subLinksList = link.parentElement.querySelector(".sub__links-list");
      const chevronIcon = link.querySelector("i");

      subLinksList.classList.toggle("open");
      chevronIcon.classList.toggle("fa-chevron-up");
    });
  }
});

// ======== END SIDEBAR OPERATIONS ========

// ======== START CIRCLE PROGRESS OPERATIONS ========

const circlesNumber = document.querySelectorAll(".card__circle-number");

/*
 * dasharray - (dasharray * (current value / total value))
 * 169 - (169 * (678 / 1000))
 */

circlesNumber.forEach((circleNumber, index) => {
  var circleCssAnimation = document.createElement("style");
  circleCssAnimation.type = "text/css";

  const rules = document.createTextNode(`

  .statistic__card:nth-child(${
    index + 1
  }) .top__card .card__circle-statistic circle {
    animation: circle-progress-${index} 2s linear forwards;
  }

    @keyframes circle-progress-${index} {
      100% {
        stroke-dashoffset: ${169 - 169 * (circleNumber.innerText / 1000)};
      }
    }
  `);

  circleCssAnimation.appendChild(rules);
  document.querySelector("head").appendChild(circleCssAnimation);
});

// ======== END CIRCLE PROGRESS OPERATIONS ========

// ======== START COLUMN CHARTS ========

// subscriptions chart
if (document.querySelector("#subscriptions-chart") != null) {
  var subscriptionsOptions = {
    series: [
      {
        name: "الأول",
        data: [100, 200, 300, 349, 53, 58, 500, 10, 66],
        color: "#39B3F9",
      },
      {
        name: "الثاني",
        data: [300, 485, 101, 98, 30, 145, 91, 114, 94],
        color: "#1686C6",
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "الجمعة",
        "الخميس",
        "الاربعاء",
        "الثلاثاء",
        "الأثنين",
        "الأحد",
        "السبت",
      ],
    },
    fill: {
      opacity: 1,
      colors: ["#39B3F9", "#1686C6"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val}ج.م`;
        },
      },
    },
  };

  var subscriptionsChart = new ApexCharts(
    document.querySelector("#subscriptions-chart"),
    subscriptionsOptions
  );
  subscriptionsChart.render();
}

// sales chart
if (document.querySelector("#sales-chart") != null) {
  var salesOptions = {
    series: [
      {
        name: "الأول",
        data: [100, 200, 300, 349, 53, 58, 500, 10, 66],
        color: "#39B3F9",
      },
      {
        name: "الثاني",
        data: [300, 485, 101, 98, 30, 145, 91, 114, 94],
        color: "#1686C6",
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "الجمعة",
        "الخميس",
        "الاربعاء",
        "الثلاثاء",
        "الأثنين",
        "الأحد",
        "السبت",
      ],
    },
    fill: {
      opacity: 1,
      colors: ["#39B3F9", "#1686C6"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val}ج.م`;
        },
      },
    },
  };

  var salesChart = new ApexCharts(
    document.querySelector("#sales-chart"),
    salesOptions
  );
  salesChart.render();
}

// ======== END COLUMN CHARTS ========
