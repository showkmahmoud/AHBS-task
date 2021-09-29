import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  openMenu: boolean = false;
  productForm!: FormGroup;
  data: any = [
    {
      label: 'wh1',
      types: [],
    },
    {
      label: 'wh2',
      types: [
        { typeLabel: 'type B' },
        { typeLabel: 'type C' },
        { typeLabel: 'type E' },
      ],
    },
    {
      label: 'wh3',
      types: [
        { typeLabel: 'type S' },
        { typeLabel: 'type N' },
        { typeLabel: 'type R' },
      ],
    },
  ];
  objOne: any = {
    wareHouse1: {
      typeA: [
        { id: 1, name: 'product1', onHand: 200 },
        { id: 2, name: 'product2', onHand: 300 },
      ],
      typeB: [],
    },
  };
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      warehouse: ['select warehouse'],
      type: [''],
    });
  }
  get productsForm(): any {
    return this.productForm.controls;
  }
  onToggle() {
    this.openMenu = !this.openMenu;
  }
  onConsole() {
    console.log(this.productForm.controls);
    console.log(this.productsForm.warehouse.value);
    console.log(this.data.label);
    // console.log(this.productsForm.value.warehouse);
  }
}

const obj = {
  wareHouseOne: [
    {
      name: 'productOne',
      type: 'typeA',
      onHand: 200,
    },
    {
      name: 'productTwo',
      type: 'typeB',
      onHand: 100,
    },
  ],
};

const objOne = {
  wareHouse1: {
    typeA: [
      { id: 1, name: 'product1', onHand: 200 },
      { id: 2, name: 'product2', onHand: 300 },
    ],
    typeB: [],
  },
};

const arr = [{ id: 1, name: 'product1', label: 'wh1', type: 'A', onHand: 200 }];

const data = [
  {
    labe: 'wh1',
    type: 'b',
  },
];
