import React, { useEffect, useState } from 'react';
// import acrossTabs from 'across-tabs';

import { CustomCheckbox, CustomCheckbox2 } from '../../Components';

import './style.css';

// export interface ICheckboxProps {
//   name?: string;
// }

export function Checkbox(): React.ReactElement {
  const channel: BroadcastChannel = new BroadcastChannel('selectedList');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const checkboxList: Array<{ value: string; label: string }> = [...new Array<string>(500)]
    .fill('Item')
    .map((item, index) => ({ label: item + String(index), value: String(index) }));

  // useEffect(() => {
  //   console.log('🚀 ~ file: Checkbox index.tsx:14 ~ useEffect ~ running - ', Date());
  // });

  useEffect(() => {
    // window.addEventListener('storage', onStorageUpdate);
    channel.addEventListener('message', (event: MessageEvent<string[]>) => {
      console.log('🚀 ~ file: index.tsx:27 ~ channel.addEventListener ~ event', event.data);
      setSelectedItems(event.data);
    });
    console.log('🚀 ~ file: index.tsx:23 ~ useEffect ~ storage / broadcast event listener added');

    return () => {
      // window.removeEventListener('storage', onStorageUpdate);
      // channel.close();
      console.log('🚀 ~ file: index.tsx:27 ~ return ~ storage / broadcast event listener removed');
    };
  }, []);

  // useEffect(() => {
  //   setName(localStorage.getItem('name') || '');
  //   window.addEventListener('storage', onStorageUpdate);
  //   return () => {
  //     window.removeEventListener('storage', onStorageUpdate);
  //   };
  // }, []);

  const onStorageUpdate = (storageEvent: StorageEvent): any => {
    const { storageArea, oldValue, newValue, key } = storageEvent;
    const selectedItems: string[] = JSON.parse(localStorage.getItem('selectedItems') ?? '') ?? [];
    console.log('🚀 ~ file: index.tsx:41 ~ onStorageUpdate ~ storageEvent - ', storageArea, oldValue, newValue, key);
    console.log('🚀 ~ file: index.tsx:42 ~ onStorageUpdate ~ selectedItems - ', selectedItems);
    setSelectedItems(selectedItems);
  };
  // useEffect(() => {
  //   console.log('Across tabs - ', acrossTabs);
  // }, []);
  // let parent: any;
  // const handleOpenTab = (e: any): void => {
  //   parent = new acrossTabs.Child({
  //     onReady: (e: any) => {
  //       console.log('🚀 ~ file: index.tsx ~ onReady ~ e - ', e);
  //     },
  //     onInitialize: (e: any) => {
  //       console.log('🚀 ~ file: index.tsx ~ onInitialize ~ e - ', e);
  //     },
  //     onParentDisconnect: (e: any) => {
  //       console.log('🚀 ~ file: index.tsx ~ onParentDisconnect ~ e - ', e);
  //     },
  //   });
  //   parent.openNewTab();
  // };

  return (
    <div>
      <h3>Checkbox testing component working</h3>
      <div className="flexbox-horizontal">
        {/* <CustomCheckbox list={checkboxList} /> */}
        <CustomCheckbox2
          options={checkboxList}
          selectedOptions={selectedItems}
          onOptionsChange={(selectedOptions) => {
            console.log('🚀 ~ file: index.tsx:66 ~ Checkbox ~ selectedOptions', selectedOptions);
            // localStorage.setItem('selectedItems', JSON.stringify(selectedOptions));
            // window.dispatchEvent(new Event('storage'));
            setSelectedItems(selectedOptions);
            channel.postMessage(selectedOptions);
          }}
        />
      </div>
      {/* <button onClick={handleOpenTab}>Open new tab</button> */}
    </div>
  );
}
