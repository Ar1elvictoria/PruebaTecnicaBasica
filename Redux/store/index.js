// Redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "../reducers/media";

export default configureStore ({
    reducer: {
        media: mediaReducer
    }
});
