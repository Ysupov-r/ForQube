import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://192.168.154.100:8081' + '/auth',
          realm: 'NewRealmTest',
          clientId: 'login-app',
        },
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: true
        }
      });
}