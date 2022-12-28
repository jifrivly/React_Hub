import React, { ReactElement } from 'react';

export interface IFeaturesProps {
  name?: string;
}

export function Features(props: IFeaturesProps): ReactElement {
  return (
    <div>
      <p>Feature module working</p>
    </div>
  );
}
