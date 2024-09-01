export const fetchData = async <T>(
  route: string,
  params: RequestInit,
  responseType: "json" | "text" = "json"
): Promise<T> => {
  try {
    const response = await fetch(route, params);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data =
      responseType === "json" ? await response.json() : await response.text();

    return data;
  } catch (error) {
    throw error;
  }
};
