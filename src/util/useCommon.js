import { reactive, readonly } from "vue";

const defalutState = {
  loading: false,
  error: false,
};

const commonState = reactive(defalutState);

const actions = {
  updateLoadingStatus: ({ loading }) => {
    commonState.loading = loading;
  },
  updateErrorStatus: ({ error }) => {
    commonState.error = error;
  },
};

export default () => ({
  commonState: readonly(commonState),
  ...actions,
});
