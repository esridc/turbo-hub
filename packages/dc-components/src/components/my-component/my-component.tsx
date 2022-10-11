import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { add } from "dc-util";
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    const num = add(3,5)
    // eslint-disable-next-line react/no-unescaped-entities
    return <div>Hello from Stencil! I'm {this.getText()} and my add(3,5) returned {num}</div>;
  }
}
