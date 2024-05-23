export const store: any = {
  data: localStorage.getItem('tailwindcomponents-store') ? JSON.parse(localStorage.getItem('tailwindcomponents-store') as string) ?? {} : {},
  set(key: string, value: Record<string, any>) {
    store.data[key] = value

    localStorage.setItem('tailwindcomponents-store', JSON.stringify(store.data))
  },
  get(uuid: string) {
    const key = uuid.split('-')[0]
    return store.data[key][uuid]
  },
  find(namespace: string, url: string) {
    return store.data[namespace] && Object.values(store.data[namespace]).find((item: any) => item.url === url)
  },
}
