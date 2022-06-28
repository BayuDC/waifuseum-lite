import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

import { AlbumDocument } from '../models/types/album';

declare module 'fastify' {
    interface FastifyRequest {
        state: {
            album?: AlbumDocument;
        };
    }
}

export default fp(function (fastify, options, done) {
    fastify.addHook('onRequest', (req, reply, done) => {
        req.state = {};

        done();
    });
    done();
} as FastifyPluginCallback);
