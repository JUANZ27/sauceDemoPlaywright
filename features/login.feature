Feature: Login en SauceDemo

  Scenario: Login exitoso con usuario estándar
    Given el usuario navega a la página de login
    When inicia sesión con "standard_user" y "secret_sauce"
    Then debería ver la página de productos

  Scenario: Login fallido con usuario bloqueado
    Given el usuario navega a la página de login
    When inicia sesión con "locked_out_user" y "secret_sauce"
    Then debería ver un mensaje de error