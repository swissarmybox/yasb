import React from 'react';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';

export function TodoList() {
  const items = [
    {
      label: 'Update',
      icon: 'pi pi-refresh',
      command: (e) => {
        /**
        toast.current.show({
          severity: 'success',
          summary: 'Updated',
          detail: 'Data Updated',
        });
         **/
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-times',
      command: (e) => {
        /**
        toast.current.show({
          severity: 'success',
          summary: 'Delete',
          detail: 'Data Deleted',
        });
         **/
      },
    },
    {
      label: 'React Website',
      icon: 'pi pi-external-link',
      command: (e) => {
        window.location.href = 'https://facebook.github.io/react/';
      },
    },
    {
      label: 'Upload',
      icon: 'pi pi-upload',
      command: (e) => {
        window.location.hash = '/fileupload';
      },
    },
  ];

  const leftContents = (
    <React.Fragment>
      <Button label="New" icon="pi pi-plus" className="p-mr-2" />
      <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
      <i className="pi pi-bars p-toolbar-separator p-mr-2" />
      <SplitButton
        label="Save"
        icon="pi pi-check"
        model={items}
        className="p-button-warning"
      ></SplitButton>
    </React.Fragment>
  );

  const rightContents = (
    <React.Fragment>
      <Button icon="pi pi-search" className="p-mr-2" />
      <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
      <Button icon="pi pi-times" className="p-button-danger" />
    </React.Fragment>
  );

  const products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 29,
      category: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1004',
      code: 'h456wer53',
      name: 'Bracelet',
      description: 'Product Description',
      image: 'bracelet.jpg',
      price: 15,
      category: 'Accessories',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: '1005',
      code: 'av2231fwg',
      name: 'Brown Purse',
      description: 'Product Description',
      image: 'brown-purse.jpg',
      price: 120,
      category: 'Accessories',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4,
    },
    {
      id: '1006',
      code: 'bib36pfvm',
      name: 'Chakra Bracelet',
      description: 'Product Description',
      image: 'chakra-bracelet.jpg',
      price: 32,
      category: 'Accessories',
      quantity: 5,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
    },
    {
      id: '1007',
      code: 'mbvjkgip5',
      name: 'Galaxy Earrings',
      description: 'Product Description',
      image: 'galaxy-earrings.jpg',
      price: 34,
      category: 'Accessories',
      quantity: 23,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1008',
      code: 'vbb124btr',
      name: 'Game Controller',
      description: 'Product Description',
      image: 'game-controller.jpg',
      price: 99,
      category: 'Electronics',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 4,
    },
    {
      id: '1009',
      code: 'cm230f032',
      name: 'Gaming Set',
      description: 'Product Description',
      image: 'gaming-set.jpg',
      price: 299,
      category: 'Electronics',
      quantity: 63,
      inventoryStatus: 'INSTOCK',
      rating: 3,
    },
  ];

  return (
    <div>
      <Toolbar left={() => leftContents} right={() => rightContents} />
      <div>
        <div className="card">
          <DataTable value={products}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}