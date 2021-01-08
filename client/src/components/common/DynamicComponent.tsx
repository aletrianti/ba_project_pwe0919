import React from 'react';

export default function DynamicComponent(dynamicComponent: any) {
  interface DynamicComponentState {
    component?: any;
  }

  class DynamicComponent extends React.Component<{}, DynamicComponentState> {
    constructor(props) {
      super(props);

      this.state = {
        component: undefined,
      };
    }

    async componentDidMount() {
      const component = await dynamicComponent();

      this.setState({ component: component.default });
    }

    render() {
      const { component: Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  }

  return DynamicComponent;
}
