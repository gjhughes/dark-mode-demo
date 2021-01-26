import AsyncStorage from "@react-native-async-storage/async-storage"

type StorageKey = "appearanceSettings"

class Storage {
  async getItem(key: StorageKey) {
    return await AsyncStorage.getItem(key)
  }

  async setItem(key: StorageKey, value: string) {
   await AsyncStorage.setItem(key, value)
  }
}

const storage = new Storage()

export default storage
