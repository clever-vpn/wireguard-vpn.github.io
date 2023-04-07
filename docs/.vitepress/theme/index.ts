import DefaultTheme from "vitepress/theme";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from 'vuetify/components'

const vuetify = createVuetify({components});
export default {
  ...DefaultTheme,
  enhanceApp({ app, siteData }) {
    app.use(vuetify);
  },
};