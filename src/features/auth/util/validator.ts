import { z } from 'zod'
import { MESSAGES } from '../../../shared/constants/messages';

export const loginSchema =z.object({
        email : z.string().trim().toLowerCase()
                  .min(1, MESSAGES.validation.emailRequired)
                  .email(MESSAGES.validation.invalidEmailAddress),
        password:z.string().min(8,MESSAGES.validation.passwordMustBeAtLeastEightCharacters),
    })

export type LoginFormValues = z.infer<typeof loginSchema>;

