import * as React from 'react';

export interface IExamplesProps {
  name?: string;
}

export function Examples(props: IExamplesProps): React.ReactElement {
  return (
    <div>
      <p>Examples module working</p>
    </div>
  );
}
