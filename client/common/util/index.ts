interface GetRootOptions {
  id?: string
  parent?: HTMLElement
  tag?: keyof HTMLElementTagNameMap
}

/**
 * Get root element to host the application.
 * @param options Options
 * @param options.id Optional HTML element ID for root element
 * @param options.parent Optional parent HTML element of root element
 * @param options.tag Optional tag type for root element
 * @return HTML element to mount application.
 */
export const getRoot = ({
  id = 'root',
  parent = document.body,
  tag = 'div',
}: GetRootOptions = {}) => {
  let root = parent.querySelector(`#${id}`)
  if (!root) {
    root = document.createElement(tag)
    root.id = id // eslint-disable-line functional/immutable-data
    parent.appendChild(root)
  }
  return root
}
