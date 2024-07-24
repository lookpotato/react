export type Type = any;
export type Key = any;
export type Ref = any;
export type Props = any;
export type ElementType = any;

export interface ReactElement {
	$$typeof: Symbol | number;
	type: ElementType;
	key: Key;
	// ref: 用来引用已挂载的DOM元素或React组件实例。
	ref: Ref;
	props: Props;
	__mark: string;
}