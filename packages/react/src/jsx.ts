// jsx应该返回成React Element的结果
import { REACT_ELEMENT_TYPE } from "react/shared/ReactSymbols";
import { Key, Ref, Props, Type, ReactElement, ElementType} from "react/shared/ReactTypes";
// ReactElement构造函数的实现
const ReactElement = function (type: Type, key: Key, ref: Ref, props: Props): ReactElement {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		key,
		ref,
		props,
		type,
		__mark: 'tianCai'
	}
	return element; 
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}

		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
		}

		if({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDEV = jsx;