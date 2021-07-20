export class ObjectUtils {
  public static convertJsonToObject<T>(jsonString: string): T {
    const obj = JSON.parse(jsonString) as T;
    return obj;
  }
}
