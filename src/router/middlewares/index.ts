import { ADMIN } from "../../constants/layouts";
import { RouteLocationNormalized } from "vue-router";

export async function layoutMiddleware(route: RouteLocationNormalized) {
  const { layout } = route.meta;

  const layoutName = layout || ADMIN;

  const component = await import(`../../layouts/${layoutName}.vue`);

  route.meta.layoutComponent = component.default;
}
