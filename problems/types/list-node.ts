export default class ListNode<T> {
  public val: T
  public next: ListNode<T> | null
  constructor(val = null) {
    this.val = val
    this.next = null
  }
}