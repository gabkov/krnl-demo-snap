import type { OnRpcRequestHandler } from '@metamask/snaps-sdk';
import { panel, text, heading } from '@metamask/snaps-sdk';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = async ({
  // origin,
  request,
}) => {
  switch (request.method) {
    case 'faas':
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'prompt',
          content: panel([
            heading(
              'What FaaS you would like to run along with your transaction?',
            ),
            text(
              'Choose from PE, KYT, KYC or GPT and provide them with a comma between them',
            ),
          ]),
          placeholder: 'eg.: PE, KYT, GPT: <query>',
        },
      });
    default:
      throw new Error('Method not found.');
  }
};
