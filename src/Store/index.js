import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          title: "A trip to the himalayas",
          image:
            "https://www.shutterstock.com/image-photo/snow-mountains-himalayas-nepal-260nw-1699298626.jpg",
          description: "it was a good trip and weather was very cold",
        },
        {
          id: "m2",
          title: "A trip to Kanyakumari",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSShDMvY4jJSu4KKmQ-UsrWQB6f8U_RfhRmWwalin6M&s",
          description: "it was a good trip and the sea is awesome",
        },
        {
          id: "m3",
          title: "A trip to Mumbai",
          image:
            "https://www.shutterstock.com/image-photo/gateway-india-mumbai-beautiful-landscape-260nw-749994316.jpg",
          description: "it was a good trip and it is a lovely city",
        },
        {
          id: "m4",
          title: "A trip to Delhi",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphZoCrHmz6WnofUc7usFzYkkFv5MSd92q5t-6H8SU8Q&s ",
          description: "it was a good trip and great experience",
        },
      ],
    };
  },
  mutations: {
    addMemory(state,memoryData){
        const newMemory = {
            id: new Date().toISOString(),
            title: memoryData.title,
            image: memoryData.imageUrl,
            description: memoryData.description,
        };

        state.memories.push(newMemory);
    }
  },
  actions: {
    addMemory(context, memoryData){
        context.commit('addMemory',memoryData);
    }
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) =>
        state.memories.find((memory) => memory.id === memoryId);
    },
  },
});

export default store;
