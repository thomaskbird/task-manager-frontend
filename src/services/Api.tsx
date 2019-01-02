import { config } from "../config";
import { ApiConfig } from "../interfaces";

export class Api {
  private config: any;

  constructor() {
    this.config = config;
  }

  /**
   * configuration object for api calls
   */
  private apiConfig: ApiConfig = {
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json"
    },
    mode: "cors", // no-cors, *same-origin
    redirect: "follow", // *manual, error
    referrer: "no-referrer", // *client
  };

  /**
   * Sends a post request
   * @param {string} url - The url of the api request
   * @param {object} data - The data to post with the request
   * @param {string | boolean} token - the token if resource is secure
   * @returns {any} - a promise
   */
  public post(
    url: string,
    data: object,
    token: string | boolean = false
  ): any {
    const config = {
      method: "POST",
      body: JSON.stringify(data)
    };

    if(token) {
      this.apiConfig.headers = {
        Authorization: `Bearer ${token}`,
        ...this.apiConfig.headers
      };
    }

    return this.send(url, {
      ...config,
      ...this.apiConfig
    });
  }

  /**
   * A get http request to the api
   * @param {string} url - The url of the request
   * @param {string | boolean} token - The token of the request
   * @returns {any} - A promise
   */
  public get(
    url: string,
    token: string | boolean = false
  ): any {
    const config = {
      method: "GET",
    };

    if(token) {
      this.apiConfig.headers = {
        Authorization: `Bearer ${token}`,
        ...this.config.headers
      };
    }

    return this.send(url, {
      ...config,
      ...this.apiConfig
    });
  }

  /**
   * Fetches the actual request
   *
   * @param {string} url - the fully qualified url
   * @param {object} config - the full requests headers
   * @returns {any} - a api response
   */
  public send(
    url: string,
    config: object
  ): any {
    const qualifiedUrl = this.config.apiUrl + url;
    return fetch(qualifiedUrl, config)
    .then(response => response.json());
  }
}