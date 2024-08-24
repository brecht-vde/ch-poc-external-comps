import "./user-component.js";

export default function createExternalRoot(container) {
  let initialized = false;

  return {
    render(ctx) {
      if (!initialized) {
        initialized = true;

        const userComponent = document.createElement("user-component");
        userComponent.setAttribute("user-name", ctx.user.userName);

        container.appendChild(userComponent);
      }
    },
    unmount() {
      container.innerHTML = "";
    },
  };
}
