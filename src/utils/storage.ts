import AsyncStorage from '@react-native-async-storage/async-storage';

export type StorageValue<T> = string | T;

export default class Storage {
  public static set<T>(key: string, value: StorageValue<T>) {
    return AsyncStorage.setItem(key, JSON.stringify({ data: value }));
  }

  public static remove(key: string) {
    return AsyncStorage.removeItem(key);
  }

  public static update<T>(key: string, value: StorageValue<T>) {
    return AsyncStorage.mergeItem(key, JSON.stringify({ data: value }));
  }

  public static async get<T>(key: string): Promise<T | null> {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value).data : null;
  }

  public static multiSet<T>(keyValues: [string, StorageValue<T>][]) {
    return AsyncStorage.multiSet(
      keyValues.map(([k, v]) => [k, JSON.stringify({ data: v })]),
    );
  }

  public static multiRmove(keys: string[]) {
    return AsyncStorage.multiRemove(keys);
  }

  public static multiUpdate<T>(keyValues: [string, StorageValue<T>][]) {
    return AsyncStorage.multiMerge(
      keyValues.map(([k, v]) => [k, JSON.stringify({ data: v })]),
    );
  }

  public static async multiGet(keys: string[]) {
    const values = await AsyncStorage.multiGet(keys);
    return values.map(([k, value]) => [
      k,
      value ? JSON.parse(value).data : null,
    ]);
  }

  public static clear() {
    return AsyncStorage.clear();
  }

  public static getAllKeys() {
    return AsyncStorage.getAllKeys();
  }
}
