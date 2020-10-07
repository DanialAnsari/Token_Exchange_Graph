// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class SellOrder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SellOrder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SellOrder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SellOrder", id.toString(), this);
  }

  static load(id: string): SellOrder | null {
    return store.get("SellOrder", id) as SellOrder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenToSell(): Bytes {
    let value = this.get("tokenToSell");
    return value.toBytes();
  }

  set tokenToSell(value: Bytes) {
    this.set("tokenToSell", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get payment_option(): BigInt {
    let value = this.get("payment_option");
    return value.toBigInt();
  }

  set payment_option(value: BigInt) {
    this.set("payment_option", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get askingToken(): Bytes {
    let value = this.get("askingToken");
    return value.toBytes();
  }

  set askingToken(value: Bytes) {
    this.set("askingToken", Value.fromBytes(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get status(): BigInt {
    let value = this.get("status");
    return value.toBigInt();
  }

  set status(value: BigInt) {
    this.set("status", Value.fromBigInt(value));
  }
}

export class BuyOrder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BuyOrder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BuyOrder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BuyOrder", id.toString(), this);
  }

  static load(id: string): BuyOrder | null {
    return store.get("BuyOrder", id) as BuyOrder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sell_Id(): string {
    let value = this.get("sell_Id");
    return value.toString();
  }

  set sell_Id(value: string) {
    this.set("sell_Id", Value.fromString(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }
}

export class CounterOffer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CounterOffer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CounterOffer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CounterOffer", id.toString(), this);
  }

  static load(id: string): CounterOffer | null {
    return store.get("CounterOffer", id) as CounterOffer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sell_Id(): string {
    let value = this.get("sell_Id");
    return value.toString();
  }

  set sell_Id(value: string) {
    this.set("sell_Id", Value.fromString(value));
  }

  get new_price(): BigInt {
    let value = this.get("new_price");
    return value.toBigInt();
  }

  set new_price(value: BigInt) {
    this.set("new_price", Value.fromBigInt(value));
  }

  get comment(): string {
    let value = this.get("comment");
    return value.toString();
  }

  set comment(value: string) {
    this.set("comment", Value.fromString(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get status(): BigInt {
    let value = this.get("status");
    return value.toBigInt();
  }

  set status(value: BigInt) {
    this.set("status", Value.fromBigInt(value));
  }
}
