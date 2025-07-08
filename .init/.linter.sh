#!/bin/bash
cd /home/kavia/workspace/code-generation/taskflow-110908-c66d73c3/nextjs_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

