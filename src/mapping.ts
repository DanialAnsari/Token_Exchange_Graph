import {SellOrderAltered , AcceptOrderAltered, CounterOrderAltered } from '../generated/Token_Exchange/Token_exchange'

import {  SellOrder, BuyOrder , CounterOffer } from '../generated/schema'

import { BigInt,BigDecimal } from "@graphprotocol/graph-ts"



// export function handleNewGravatar(event: NewGravatar): void {
//   let gravatar = new Gravatar(event.params.id.toHex())
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }

// export function handleUpdatedGravatar(event: UpdatedGravatar): void {
//   let id = event.params.id.toHex()
//   let gravatar = Gravatar.load(id)
//   if (gravatar == null) {
//     gravatar = new Gravatar(id)
//   }
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }

  export function handleSellOrder(event: SellOrderAltered): void{
      let sell_id= event.params._id.toString();
      let sell_order= SellOrder.load(sell_id);

      if(sell_order== null){
        sell_order = new SellOrder(sell_id);
      }

      sell_order.tokenToSell= event.params._tokenToSell;
      sell_order.quantity = event.params.quantity;
      sell_order.seller= event.params._seller;
      sell_order.status= BigInt.fromI32(event.params._status);
      sell_order.amount=event.params._amount;
      sell_order.price=event.params._price;
      sell_order.askingToken=event.params._tokenToExchange;
      sell_order.payment_option= BigInt.fromI32(event.params._paymentOption);
      sell_order.save();
  }

  export function handleBuyOrder(event: AcceptOrderAltered): void{
      let buy_id= event.params._id;
      let buy_order= BuyOrder.load(buy_id.toString());

      if(buy_order==null){
        buy_order=new BuyOrder(buy_id.toString());
      }

      buy_order.sell_Id=event.params.sell_id.toString();
      buy_order.buyer=event.params._buyer;
      buy_order.save();
  }

  export function handleCounterOffer(event: CounterOrderAltered): void{
      let offer_id=event.params.id.toHex();
      let counter_offer = CounterOffer.load(offer_id);
      
      if(counter_offer== null){
        counter_offer=new CounterOffer(offer_id);
      }

      counter_offer.sell_Id=event.params.sell_id.toHex();
      counter_offer.new_price=event.params._price;
      counter_offer.comment=event.params._comment;
      counter_offer.status= BigInt.fromI32(event.params._status);
      counter_offer.buyer=event.params.buyer;
      counter_offer.save();

  }