use anchor_lang::prelude::*;

declare_id!("eioYwjxzGasyXTBJQ6aRJFFczARqj6yXPxMvFr56swK");

#[program]
pub mod umich_predictions {
    use super::*;

    pub fn create_prediction(ctx: Context<CreatePrediction>, question: String) -> Result<()> {
        let prediction = &mut ctx.accounts.prediction;

        // Set the data
        prediction.question = question;
        prediction.creator = *ctx.accounts.creator.key;
        prediction.yes_votes = 0;
        prediction.no_votes = 0;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreatePrediction<'info> {
    #[account(init, payer = creator, space = 8 + 4 + 280 + 32 + 8 + 8)] // Max ~280 bytes for question string
    pub prediction: Account<'info, Prediction>,
    #[account(mut)]
    pub creator: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Prediction {
    pub question: String,         // The prediction question
    pub creator: Pubkey,          // Wallet that created the prediction
    pub yes_votes: u64,           // Yes vote count
    pub no_votes: u64,            // No vote count
}