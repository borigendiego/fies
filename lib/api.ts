type ApiType = {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers?: any;
  };

  export const api = async ({
    endpoint,
    method = "GET",
  }: ApiType) => {
    const apiURL = "https://admin.spektrum-holding.de/wp-json/wp/v2/";
    const config: any = {
      method,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        referer: apiURL,
      },
    };

    config.headers["Content-Type"] = "application/json";

    const response = await fetch(apiURL + endpoint, config);

    return response;
  };

  export const createNewUser = async (data: any) => {
    const response: any = await api({
      endpoint: "/register",
      method: "POST",
    });

    const responseJson = await response.json();

    if (response.status === 500) {
      return {
        status: 500,
        message: responseJson.message,
      };
    } else {
      return responseJson;
    }
  };