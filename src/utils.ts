export function getComponentHtml(url: any): Promise<string> {
  const component = defineAsyncComponent(url)
  const div = document.createElement('div')
  return new Promise((resolve) => {
    createApp({
      mounted() {
        const observer = new MutationObserver(() => {
          const html = div.innerHTML
          resolve(html)
          observer.disconnect()
        })

        observer.observe(div, {
          childList: true,
        })
      },
      render: () => h(component),
    }).mount(div)
  })
}
