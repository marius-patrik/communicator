# communicator PLAN

## Current Implementation State

Communicator currently contains documentation only.

## Decisions Locked

- Communicator is a Mainframe client.
- Workspace uses Communicator for desktop/web messaging.
- iOS comes after the web messaging contract is stable.

## Next Milestone

Create the web client package after Mainframe has messaging routes.

## Implementation Phases

1. Add package metadata and web tooling.
2. Define conversation/message UI state.
3. Consume Mainframe messaging tRPC routes.
4. Export `CommunicatorMount`.
5. Add smoke tests for mounted web usage.

## Verification Checklist

- `bun run typecheck`
- `bun run lint`
- `bun run build`
- Mounted Communicator renders.
- Message send/read flow works against Mainframe.
