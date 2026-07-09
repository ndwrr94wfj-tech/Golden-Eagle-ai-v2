CREATE INDEX `userId_idx` ON `chatMessages` (`userId`);--> statement-breakpoint
CREATE INDEX `createdAt_idx` ON `chatMessages` (`createdAt`);--> statement-breakpoint
CREATE INDEX `subscription_userId_idx` ON `subscriptions` (`userId`);--> statement-breakpoint
CREATE INDEX `status_idx` ON `subscriptions` (`status`);--> statement-breakpoint
CREATE INDEX `transactionId_idx` ON `subscriptions` (`transactionId`);--> statement-breakpoint
CREATE INDEX `email_idx` ON `users` (`email`);