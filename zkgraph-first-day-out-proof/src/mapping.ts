//@ts-ignore
import { require } from "@hyperoracle/zkgraph-lib";
import { Bytes, Event, Block, ByteArray } from "@hyperoracle/zkgraph-lib";

var addr_Azuki = Bytes.fromHexString(
  "0x9Dbe56E65961146525D796bdc008225BD5915a4f"
);
var esig_Transfer = Bytes.fromHexString(
  "0x9Dbe56E65961146525D796bdc008225BD5915a4f"
);

export function handleBlocks(blocks: Block[]): Bytes {
  let events: Event[] = blocks[0].events;

  // First Day Out NFT Collction by Drifter Shoots
  let fdoHolders: ByteArray = ByteArray.empty();
  for (let i = events.length - 1; i >= 0; i--) {
    if (events[i].address == addr_Azuki && events[i].esig == esig_Transfer) {
      fdoHolders.concat(events[i].topic2);
    }
  }
  let state = Bytes.fromByteArray(fdoHolders);

  return state;
}