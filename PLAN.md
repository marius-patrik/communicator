# communicator PLAN

## Current Implementation State

Communicator has a React/TypeScript package skeleton with `CommunicatorMount`
and local draft/message state.

## Decisions Locked

- Communicator is a Mainframe client.
- Workspace uses Communicator for desktop/web messaging.
- iOS comes after the web messaging contract is stable.

## Next Milestone

Wire `CommunicatorMount` to Mainframe conversations, messages, participants,
and realtime delivery after the messaging API contract lands.

## Implementation Phases

1. Add package metadata and web tooling. Done.
2. Define conversation/message UI state. Started.
3. Consume Mainframe messaging tRPC routes.
4. Export `CommunicatorMount`.
5. Add smoke tests for mounted web usage.

## Verification Checklist

- `bun run typecheck`
- `bun run lint`
- `bun run build`
- Mounted Communicator renders.
- Message send/read flow works against Mainframe.
