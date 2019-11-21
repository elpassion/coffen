import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import rootReducer from "stores/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel1
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function getComposeFunction() {
  if (process.env.NODE_ENV === "development") {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function") {
      return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  return compose;
}

function configureStore() {
  const composeEnhancers = getComposeFunction();
  const middleware = [thunkMiddleware];
  const enhancers = [];
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );
  const persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore;
