import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import userReducer from "./userSlice";
import pointsReducer from "./pointsSlice"
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persitConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persitConfig, userReducer)

export const store = configureStore({
    reducer: {
        user : persistedReducer,
        points: pointsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor = persistStore(store)