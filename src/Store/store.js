import { createSlice, configureStore } from "@reduxjs/toolkit";
const items = [
  {
    id: 1,
    category: "dresses",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
  {
    id: 2,
    category: "dresses",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$120",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
  {
    id: 3,
    category: "dresses",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$110",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
  {
    id: 4,
    category: "dresses",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$90",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
  {
    id: 5,
    category: "dresses",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$140",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
  {
    id: 6,
    category: "dresses",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$70",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
  {
    id: 7,
    category: "Jewellery",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
  {
    id: 8,
    category: "Jewellery",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$150",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
  {
    id: 9,
    category: "Jewellery",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$160",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
  {
    id: 10,
    category: "Jewellery",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
  {
    id: 11,
    category: "Jewellery",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$170",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
  {
    id: 12,
    category: "Jewellery",
    src: "./image/Banner Girl.jpg",
    title: "Blue Dress",
    price: "$150",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi. Lorem ipsum dolor sitamet consectetur adipisicing elit. Quaerat placeat similiquedicta nulla praesentium deserunt. Corporis repellendus delenitidolores eligendi.",
  },
];

const initialProductDataState = { items: { items } };
const productDataSlice = createSlice({
  name: "ProductList",
  initialState: initialProductDataState,
  reducers: {
    dresses(state) {
      state.items.filter((item) => item.category === "dresses");
    },
    jewellery(state) {
      state.items.filter((item) => item.category === "Jewellery");
    },
  },
});

const store = configureStore({
  reducer: productDataSlice.reducer,
});

export const productDataActions = productDataSlice.actions;

export default store();
