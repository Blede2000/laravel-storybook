import Checkbox from "./Checkbox.vue";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Checkbox",
    component: Checkbox,
};

export const Main = () => ({
    components: { Checkbox },
    template: '<Checkbox checked="true" />',
});
