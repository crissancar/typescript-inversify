Feature: Api health check
  In order to know the server is working
  As a health check
  I want to check the api status

  Scenario: Mooc Backend is working
    Given I send a GET request to "/health-check"
    Then the response status code should be 200
